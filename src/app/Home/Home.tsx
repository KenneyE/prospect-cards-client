import React from 'react'
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  ToggleButton,
  DynamicRangeSlider,
  SelectedFilters,
} from '@appbaseio/reactivesearch'
// import { Experiment, Variant } from '@marvelapp/react-ab-test'
// import emitter from 'lib/abEmitter'
import { Grid, Paper, Typography } from '@material-ui/core'
import useStyles from './styles'
import CollapsibleSearch from 'app/search/CollapsibleSearch'
import ListingSkeletons from 'app/common/ListingSkeleton'
import { ListingFragment, TagTypesEnum } from 'types/graphql'
import SearchResults from 'app/listings/SearchResults'
import CheckboxSearch from 'app/search/CheckboxSearch'
import YearSearch from 'app/search/YearSearch'

// interface Props {
//   category?: string;
// }

const Home = (): JSX.Element => {
  const classes = useStyles()
  const token = localStorage.getItem('prospect-cards-token')

  return (
    <Grid container spacing={ 3 }>
      <Grid item xs={ 12 }>
        <ReactiveBase
          app='listings'
          url={ process.env.REACT_APP_API_URI }
          headers={ {
            authorization: token || '',
          } }
        >
          <Grid container spacing={ 3 }>
            <Grid item md={ 2 } sm={ 3 } xs={ 12 }>
              <CollapsibleSearch title='Sport'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.Category }
                  dataField='category'
                  componentId='Category'
                  placeholder='Search Categories'
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Year'>
                <YearSearch
                  dataField='year'
                  componentId='Year'
                  placeholder='Search Years'
                />
              </CollapsibleSearch>
              <Paper className={ classes.filterPaper }>
                <Typography>Price Range</Typography>
                <DynamicRangeSlider
                  componentId='Price'
                  dataField='price'
                  stepValue={ 10 }
                  rangeLabels={ (min, max) => ({
                    start: '$' + min / 100,
                    end: '$' + max / 100,
                  }) }
                  className='custom-slider'
                  showHistogram={ false }
                  showFilter={ false }
                />
              </Paper>
              <CollapsibleSearch title='Type'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.ProductType }
                  componentId='Product Type'
                  dataField='productType'
                  placeholder='Search Types'
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Player'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.Player }
                  componentId='Player Name'
                  dataField='player'
                  placeholder='Player Name'
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Manufacturer'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.Manufacturer }
                  dataField='manufacturer'
                  componentId='Manufacturer'
                  placeholder='Search Manufacturers'
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Set'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.SetType }
                  dataField='setType'
                  componentId='Set'
                  placeholder='Search Sets'
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Parallel'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.Parallel }
                  dataField='parallel'
                  componentId='Parallel'
                  placeholder='Search Parallels'
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Grader'>
                <CheckboxSearch
                  tagType={ TagTypesEnum.Grader }
                  dataField='grader'
                  componentId='Grader'
                  placeholder='Search Graders'
                />
              </CollapsibleSearch>
              <ToggleButton
                componentId='Rookie'
                dataField='rookie'
                data={ [{ label: 'Rookie / 1st Year Only', value: true }] }
                URLParams
              />
            </Grid>
            <Grid item md={ 10 } sm={ 9 } xs={ 12 }>
              <DataSearch
                componentId='Search'
                dataField={ [
                  'title',
                  'description',
                  'playerText',
                  'category',
                  'year',
                  'productType',
                  'setType',
                  'parallel',
                  'manufacturer',
                  'grader',
                ] }
                fieldWeights={ [1, 1, 5, 5, 5, 5, 5, 5, 5, 5] }
                fuzziness='AUTO'
                autosuggest
                showClear
                URLParams
                showIcon={ false }
                innerClass={ {
                  input: classes.searchBox,
                } }
              />
              <SelectedFilters showClearAll='default' />
              <ReactiveList
                infiniteScroll
                showResultStats={ false }
                dataField='player'
                showLoader={ false }
                componentId='SearchResult'
                react={ {
                  and: [
                    'Search',
                    'Price',
                    'Description',
                    'Player Name',
                    'Category',
                    'Year',
                    'Product Type',
                    'Manufacturer',
                    'Set',
                    'Grader',
                    'Parallel',
                    'Rookie',
                  ],
                } }
                sortOptions={ [
                  { label: 'Relevance', dataField: '_score', sortBy: 'desc' },
                  { label: 'Newest', dataField: 'createdAt', sortBy: 'desc' },
                  {
                    label: 'Price - Highest to Lowest',
                    dataField: 'price',
                    sortBy: 'desc',
                  },
                  {
                    label: 'Price - Lowest to Highest',
                    dataField: 'price',
                    sortBy: 'asc',
                  },
                ] }
                defaultSortOption='Relevance'
              >
                {(result): JSX.Element => {
                  if (!result?.rawData) return <ListingSkeletons />
                  const listings = result.rawData.responses.hits

                  return (
                    <div className={ classes.resultsWrapper }>
                      {listings.length ? (
                        <SearchResults
                          listingIds={ listings.map(
                            (l: ListingFragment) => l.id,
                          ) }
                        />
                      ) : (
                        'No results...'
                      )}
                    </div>
                  )
                }}
              </ReactiveList>
            </Grid>
          </Grid>
        </ReactiveBase>
      </Grid>
      {/*<Experiment name='My Example'>*/}
      {/*  <Variant name='A'>*/}
      {/*    <div>Section A</div>*/}
      {/*  </Variant>*/}
      {/*  <Variant name='B'>*/}
      {/*    <div>Section B</div>*/}
      {/*  </Variant>*/}
      {/*</Experiment>*/}
      {/*<Button*/}
      {/*  onClick={ () => {*/}
      {/*    emitter.emitWin('My Example')*/}
      {/*  } }*/}
      {/*>*/}
      {/*  Succeed*/}
      {/*</Button>*/}
    </Grid>
  )
}

export default Home
