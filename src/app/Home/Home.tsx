import React from 'react'
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  ResultCard,
  MultiList,
} from '@appbaseio/reactivesearch'
import { Grid, LinearProgress } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const { ResultCardsWrapper } = ReactiveList

const Home = (): JSX.Element => {
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
              dataField={ ['player.name', 'description'] }
              title='Search'
              fuzziness='AUTO'
            />
            <br />
            <MultiList
              componentId='name-list'
              dataField='player.name_as_keyword'
              title='Player'
              placeholder='Player Name'
              size={ 100 }
              showCheckbox
              showCount
              showSearch
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
                and: ['all-search', 'description-search', 'name-list'],
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
                        showIndicators={ item.image_urls.length > 1 }
                      >
                        {item.image_urls.map((image: string, ind: number) => {
                          return (
                            <img
                              key={ image }
                              src={ image }
                              alt={ `Image ${ind} of ${item.player.name}` }
                              style={ { width: 100, maxHeight: 140 } }
                            />
                          )
                        })}
                      </Carousel>
                      <ResultCard.Title
                        dangerouslySetInnerHTML={ {
                          __html: item.title,
                        } }
                      />
                      <ResultCard.Description>
                        <p>Player: {item.player.name}</p>
                        <p>Description: {item.description}</p>
                      </ResultCard.Description>
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
