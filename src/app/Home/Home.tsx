import React from 'react'
import LogoutButton from 'app/common/LogoutButton'
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
} from '@appbaseio/reactivesearch'

const Home = (): JSX.Element => {
  return (
    <ReactiveBase app='listings' url='http://localhost:9200/'>
      <DataSearch
        componentId='SearchSensor'
        dataField={ ['title', 'description'] }
      />
      <ReactiveList
        componentId='SearchResult'
        react={ {
          and: ['SearchSensor'],
        } }
        renderItem={ (res) => <div key={ res.id }>{res.title}</div> }
        dataField='title'
      />
      <LogoutButton />
    </ReactiveBase>
  )
}

export default Home
