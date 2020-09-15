import React from 'react'
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  ResultCard,
  MultiList,
  SingleList,
} from '@appbaseio/reactivesearch'
import { Grid, LinearProgress, Typography } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './carousel.css'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const { ResultCardsWrapper } = ReactiveList

const Home = (): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      <ReactiveBase
        app='listings'
        url={ process.env.REACT_APP_ELASTICSEARCH_URI }
      >
        <Grid container spacing={ 3 }>
          <Grid item md={ 2 } xs={ 12 }>
            <DataSearch
              componentId='all-search'
              dataField={ ['player.name', 'category.name', 'description'] }
              title='Search'
              fuzziness='AUTO'
            />
            <br />
            <MultiList
              componentId='name-list'
              dataField='player.name_as_keyword'
              title='Player'
              placeholder='Player Name'
              size={ 8 }
              showCheckbox
            />
            <MultiList
              componentId='product-type-list'
              dataField='product_type.name'
              title='Type'
              placeholder='Set'
              size={ 8 }
              showCheckbox
            />
            <SingleList
              dataField='category.name'
              showRadio
              componentId='category-search'
              title='Category'
            />
            <DataSearch
              componentId='description-search'
              dataField='description'
              placeholder='Description'
              title='Description'
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
                  'description-search',
                  'name-list',
                  'category-search',
                  'product-type-list',
                ],
              } }
            >
              {({ data, loading }) => (
                <ResultCardsWrapper>
                  {loading && <LinearProgress />}

                  {data.map((item: any) => (
                    <ResultCard key={ item._id }>
                      <Carousel
                        showThumbs={ false }
                        showStatus={ false }
                        infiniteLoop
                        centerMode={ item.image_urls.length > 1 }
                        showIndicators={ item.image_urls.length > 1 }
                      >
                        {item.image_urls.map((image: string, ind: number) => {
                          return (
                            <img
                              key={ image }
                              src={ image }
                              alt={ `${item.player.name} No. ${ind}` }
                              className={ classes.img }
                            />
                          )
                        })}
                      </Carousel>
                      <Link
                        className={ classes.linkArea }
                        to={ `/listings/${item.id}` }
                      >
                        <ResultCard.Title
                          dangerouslySetInnerHTML={ {
                            __html: item.title,
                          } }
                        />
                        <ResultCard.Description>
                          <Typography>Player: {item.player.name}</Typography>
                          <Typography>
                            Description: {item.description}
                          </Typography>
                        </ResultCard.Description>
                      </Link>
                    </ResultCard>
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
