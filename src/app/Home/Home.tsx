import React from 'react'
import LogoutButton from 'app/common/LogoutButton'
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  ResultCard,
  MultiList,
} from '@appbaseio/reactivesearch'
import { Grid } from '@material-ui/core'

const { ResultCardsWrapper } = ReactiveList

const Home = (): JSX.Element => {
  return (
    <ReactiveBase app='listings' url='http://localhost:9200'>
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
