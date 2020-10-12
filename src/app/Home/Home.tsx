import React from 'react'
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  MultiList,
  SingleList,
  RangeInput,
  ToggleButton,
  DynamicRangeSlider,
} from '@appbaseio/reactivesearch'
// import { Experiment, Variant } from '@marvelapp/react-ab-test'
// import emitter from 'lib/abEmitter'
import { Grid, LinearProgress } from '@material-ui/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './carousel.css'
import useStyles from './styles'
import SearchResult from 'app/listings/SearchResult'
import { ElasticListing } from 'types'
import MyOffers from 'app/MyOffers'
import PrivateComponent from 'app/PrivateComponent'

const { ResultCardsWrapper } = ReactiveList

interface Props {
  category?: string;
  viewerId?: number;
}

const Home = ({ category, viewerId }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Grid container spacing={ 3 }>
      <Grid item md={ 10 } xs={ 12 }>
        <ReactiveBase
          app={ `listings${
            process.env.NODE_ENV === 'development' ?
              '_development' :
              '_production'
          }` }
          url={ process.env.REACT_APP_ELASTICSEARCH_URI }
        >
          <Grid container spacing={ 3 }>
            <Grid item md={ 2 } xs={ 12 }>
              <DataSearch
                componentId='all-search'
                dataField={ ['*'] }
                title='Search'
                fuzziness='AUTO'
              />
              {/* Below is used to exclude listings created by current user */}
              {viewerId && (
                <RangeInput
                  componentId='exclude-user-search'
                  dataField='user.id'
                  stepValue={ 25 }
                  range={ { start: viewerId, end: viewerId } }
                  style={ { display: 'none' } }
                />
              )}
              <DataSearch
                componentId='only-available-search'
                dataField='status'
                value='available'
                style={ { display: 'none' } }
              />
              <br />
              <DynamicRangeSlider
                componentId='price-slider'
                dataField='price'
                title='Price Range'
                rangeLabels={ (min, max) => ({
                  start: '$' + min / 100,
                  end: '$' + max / 100,
                }) }
              />
              <br />
              <MultiList
                componentId='name-list'
                dataField='player.name'
                title='Player'
                placeholder='Player Name'
                size={ 8 }
                showCheckbox
                showCount={ false }
              />
              <br />
              <MultiList
                componentId='product-type-list'
                dataField='productType.name'
                title='Type'
                placeholder='Search Types'
                size={ 8 }
                showCheckbox
                showCount={ false }
              />
              <br />
              <SingleList
                dataField='category.name'
                showRadio
                componentId='category-search'
                title='Category'
                value={ category }
                placeholder='Search Categories'
                showCount={ false }
                style={ category ? { display: 'none' } : undefined }
              />
              {category ? null : <br />}
              <SingleList
                dataField='manufacturer.name'
                showRadio
                componentId='manufacturer-search'
                title='Manufacturer'
                placeholder='Search Manufacturers'
                showCount={ false }
              />
              <br />
              <SingleList
                dataField='setType.name'
                showRadio
                componentId='set-search'
                title='Set'
                placeholder='Search Sets'
              />
              <br />
              <SingleList
                dataField='grader.name'
                showRadio
                componentId='grader-search'
                title='Graded By'
                placeholder='Search Graders'
              />
              <DataSearch
                componentId='description-search'
                dataField='description'
                placeholder='Search Descriptions'
                title='Description'
              />
              <br />
              <ToggleButton
                componentId='rookie-toggle'
                dataField='rookie'
                data={ [{ label: 'Rookie / 1st Year Only', value: true }] }
              />
            </Grid>
            <Grid item md={ 10 } xs={ 12 }>
              <ReactiveList
                infiniteScroll
                dataField='player.name'
                componentId='SearchResult'
                react={ {
                  and: [
                    'all-search',
                    'only-available-search',
                    'price-slider',
                    'description-search',
                    'name-list',
                    'category-search',
                    'product-type-list',
                    'manufacturer-search',
                    'set-search',
                    'grader.name',
                    'rookie-toggle',
                  ],
                  not: ['exclude-user-search'],
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
                {({
                  data,
                  loading,
                }: {
                  data: ElasticListing[];
                  loading: boolean;
                }) => (
                  <ResultCardsWrapper className={ classes.resultsWrapper }>
                    {loading && <LinearProgress />}

                    {data.map((item: ElasticListing) => (
                      <SearchResult key={ item.id } item={ item } />
                    ))}
                  </ResultCardsWrapper>
                )}
              </ReactiveList>
            </Grid>
          </Grid>
        </ReactiveBase>
      </Grid>
      <Grid item md={ 2 } xs={ 12 }>
        <PrivateComponent>
          <MyOffers />
        </PrivateComponent>
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
