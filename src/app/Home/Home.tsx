import React from 'react'
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  MultiList,
  SingleList,
  ToggleButton,
  DynamicRangeSlider,
  SelectedFilters,
} from '@appbaseio/reactivesearch'
// import { Experiment, Variant } from '@marvelapp/react-ab-test'
// import emitter from 'lib/abEmitter'
import { Grid, Paper, Typography } from '@material-ui/core'
import useStyles from './styles'
import SearchResult from 'app/listings/SearchResult'
import { ElasticListing } from 'types'
import CollapsibleSearch from 'app/search/CollapsibleSearch'
import ListingSkeletons from 'app/common/ListingSkeleton'

const { ResultCardsWrapper } = ReactiveList

interface Props {
  category?: string;
}

const Home = ({ category }: Props): JSX.Element => {
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
                <SingleList
                  dataField='category.name'
                  showRadio
                  componentId='Category'
                  value={ category }
                  placeholder='Search Categories'
                  showCount={ false }
                  URLParams
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
                <MultiList
                  componentId='Product Type'
                  dataField='productType.name'
                  placeholder='Search Types'
                  size={ 8 }
                  showCheckbox
                  showCount={ false }
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Player'>
                <MultiList
                  componentId='Player Name'
                  dataField='player.name'
                  placeholder='Player Name'
                  size={ 8 }
                  showCheckbox
                  showCount={ false }
                  URLParams
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Manufacturer'>
                <SingleList
                  dataField='manufacturer.name'
                  showRadio
                  componentId='Manufacturer'
                  title='Manufacturer'
                  placeholder='Search Manufacturers'
                  showCount={ false }
                  URLParams
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Set'>
                <SingleList
                  dataField='setType.name'
                  showRadio
                  componentId='Set'
                  title='Set'
                  placeholder='Search Sets'
                  URLParams
                />
              </CollapsibleSearch>
              <CollapsibleSearch title='Grader'>
                <SingleList
                  dataField='grader.name'
                  showRadio
                  componentId='Grader'
                  title='Graded By'
                  placeholder='Search Graders'
                  URLParams
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
                dataField={ ['*'] }
                fuzziness='AUTO'
                autosuggest
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
                dataField='player.name'
                showLoader={ false }
                componentId='SearchResult'
                react={ {
                  and: [
                    'Search',
                    'Price',
                    'Description',
                    'Player Name',
                    'Category',
                    'Product Type',
                    'Manufacturer',
                    'Set',
                    'Grader',
                    'Rookie',
                  ],
                } }
                sortOptions={ [
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
                defaultSortOption='Newest'
              >
                {(args): JSX.Element => {
                  if (!args?.rawData) return <ListingSkeletons />

                  return (
                    <ResultCardsWrapper className={ classes.resultsWrapper }>
                      {args.rawData.responses.hits.map(
                        (item: ElasticListing) => (
                          <SearchResult key={ item.id } item={ item } />
                        ),
                      )}
                    </ResultCardsWrapper>
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
