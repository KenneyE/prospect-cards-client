import React from 'react'
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  MultiList,
  SingleList,
  // ToggleButton,
  // DynamicRangeSlider,
} from '@appbaseio/reactivesearch'
import { Grid, LinearProgress } from '@material-ui/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './carousel.css'
import useStyles from './styles'
import SearchResult from 'app/listings/SearchResult'

const { ResultCardsWrapper } = ReactiveList

interface Props {
  category?: string;
}

const Home = ({ category }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      <ReactiveBase
        app={ `listings${
          process.env.NODE_ENV === 'development' ? '_development' : ''
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
            {/*<br />*/}
            {/*<DynamicRangeSlider*/}
            {/*  componentId='price-slider'*/}
            {/*  dataField='price'*/}
            {/*  title='Price Range'*/}
            {/*  rangeLabels={ (min, max) => ({*/}
            {/*    start: '$' + min / 100,*/}
            {/*    end: '$' + max / 100,*/}
            {/*  }) }*/}
            {/*/>*/}
            <br />
            <MultiList
              componentId='name-list'
              dataField='player.name_as_keyword'
              title='Player'
              placeholder='Player Name'
              size={ 8 }
              showCheckbox
            />
            <br />
            <MultiList
              componentId='product-type-list'
              dataField='product_type.name'
              title='Type'
              placeholder='Search Types'
              size={ 8 }
              showCheckbox
            />
            <br />
            <SingleList
              dataField='category.name'
              showRadio
              componentId='category-search'
              title='Category'
              value={ category }
              placeholder='Search Categories'
            />
            <br />
            <SingleList
              dataField='manufacturer.name'
              showRadio
              componentId='manufacturer-search'
              title='Manufacturer'
              placeholder='Search Manufacturers'
            />
            <br />
            {/*<SingleList*/}
            {/*  dataField='set_type.name'*/}
            {/*  showRadio*/}
            {/*  componentId='set-search'*/}
            {/*  title='Set'*/}
            {/*  placeholder='Search Sets'*/}
            {/*/>*/}
            <br />
            {/*<SingleList*/}
            {/*  dataField='grader.name'*/}
            {/*  showRadio*/}
            {/*  componentId='grader-search'*/}
            {/*  title='Graded By'*/}
            {/*  placeholder='Search Graders'*/}
            {/*/>*/}
            <DataSearch
              componentId='description-search'
              dataField='description'
              placeholder='Search Descriptions'
              title='Description'
            />
            {/*<br/>*/}
            {/*<ToggleButton*/}
            {/*  componentId='rookie-toggle'*/}
            {/*  dataField='rookie'*/}
            {/*  data={ [{ label: 'Rookie / 1st Year Only', value: true }] }*/}
            {/*/>*/}
          </Grid>
          <Grid item md={ 10 } xs={ 12 }>
            <ReactiveList
              infiniteScroll
              dataField='player.name'
              componentId='SearchResult'
              react={ {
                and: [
                  'all-search',
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
              } }
            >
              {({ data, loading }) => (
                <ResultCardsWrapper className={ classes.resultsWrapper }>
                  {loading && <LinearProgress />}

                  {data.map((item: any) => (
                    <SearchResult key={ item.id } item={ item } />
                  ))}
                </ResultCardsWrapper>
              )}
            </ReactiveList>
          </Grid>
        </Grid>
      </ReactiveBase>
    </>
  )
}

export default Home
