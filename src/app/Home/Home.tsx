import React from 'react'
import LogoutButton from 'app/common/LogoutButton'
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  ResultCard,
  MultiList,
} from '@appbaseio/reactivesearch'
import { Grid, LinearProgress } from '@material-ui/core'

const { ResultCardsWrapper } = ReactiveList

const Home = (): JSX.Element => {
  return (
    <>
      <ReactiveBase
        app='listings'
        url={ process.env.REACT_APP_ELASTICSEARCH_URI }
      >
        <Grid container spacing={ 3 }>
          <Grid item xs={ 2 }>
            <MultiList
              componentId='name-list'
              dataField='player.name'
              title='Player'
              size={ 100 }
              showCheckbox
              showCount
              showSearch
            />
            <DataSearch
              componentId='description-search'
              dataField='description'
              title='Description'
            />
          </Grid>
          <Grid item xs={ 10 }>
            <ReactiveList
              dataField='player.name'
              componentId='SearchResult'
              react={ {
                and: ['description-search', 'name-list'],
              } }
            >
              {({ data, loading }) => (
                <ResultCardsWrapper>
                  {loading && <LinearProgress />}

                  {data.map((item: any) => (
                    <ResultCard key={ item._id }>
                      <ResultCard.Image src={ item.image } />
                      <ResultCard.Title
                        dangerouslySetInnerHTML={ {
                          __html: item.title,
                        } }
                      />
                      <ResultCard.Description>
                        <span>{item.description}</span>
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
