import React from 'react'
import LogoutButton from 'app/common/LogoutButton'
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  ResultCard,
} from '@appbaseio/reactivesearch'
import { Grid } from '@material-ui/core'

const { ResultCardsWrapper } = ReactiveList

const Home = (): JSX.Element => {
  return (
    <ReactiveBase app='listings' url='http://localhost:9200/'>
      <Grid container spacing={ 3 }>
        <Grid item xs={ 2 }>
          <DataSearch
            componentId='SearchSensor'
            dataField={ ['player.name'] }
          />
        </Grid>
        <Grid item xs={ 10 }>
          <ReactiveList
            componentId='SearchResult'
            react={ {
              and: ['SearchSensor'],
            } }
            dataField='player.name'
          >
            {({ data, error, loading }) => (
              <ResultCardsWrapper>
                {data.map((item: any) => (
                  <ResultCard key={ item._id }>
                    <ResultCard.Image src={ item.image } />
                    <ResultCard.Title
                      dangerouslySetInnerHTML={ {
                        __html: item.title,
                      } }
                    />
                    <ResultCard.Description>
                      <div>
                        <div>({item.average_rating} avg)</div>
                      </div>
                      <span>{item.description}</span>
                    </ResultCard.Description>
                  </ResultCard>
                ))}
              </ResultCardsWrapper>
            )}
          </ReactiveList>
        </Grid>
      </Grid>
      <LogoutButton />
    </ReactiveBase>
  )
}

export default Home
