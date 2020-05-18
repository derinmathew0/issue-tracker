import React, { Component } from 'react';
import { getZipcodeDetailsAction } from '../actions/zipcodeDetailsActions';
import { connect } from 'react-redux';
import { Table } from 'antd';
import * as _ from 'underscore';


class ZipcodeDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(getZipcodeDetailsAction());
  }
  componentDidMount() {
    document.title = 'Zipcode Details';


  }
 
  render() {
    let zipcodeDetails=this.props.response.zipcodeDetails.response.RESPONSE_DATA;
   
    const columns = [
      
      {
        title: 'State Id',
        dataIndex: 'state_id',
        key: 'state_id',
      },
      {
        title: 'State Name',
        dataIndex: 'state_name',
        key: 'state_name',
      },
      {
        title: 'City Id',
        dataIndex: 'city_id',
        key: 'city_id',
      },
      {
        title: 'City Name',
        dataIndex: 'city_name',
        key: 'city_name',
      },
      {
        title: 'Country Id',
        dataIndex: 'country_id',
        key: 'country_id',
      },
      {
        title: 'Country Name',
        dataIndex: 'country_name',
        key: 'country_name',
      },
      {
        title: 'File',
        dataIndex: 'file_url',
        key: 'file_url',
        render: text => <a href={text}>{text}</a>,
      },
    ];
    let data = [];
    if( !_.isEmpty(zipcodeDetails) )
    {
      data = [
        {
          key: 0,
          state_id: zipcodeDetails.state_id,
          state_name: zipcodeDetails.state_name,
          city_id: zipcodeDetails.city_id,
          city_name: zipcodeDetails.city_name,
          country_id:zipcodeDetails.country_id,
          country_name:zipcodeDetails.country_name,
          file_url:zipcodeDetails.file_url
          
        },
      ];
    }
    

    return (
      
      <Table columns={columns} dataSource={data}/>
    );
  }
}
const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(ZipcodeDetailsPage);

