import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createIssueAction } from '../actions/issueTrackerActions';
import * as _ from 'underscore';
import { Form, Input, Button, Row, Col, Alert, Radio } from 'antd';
import 'antd/dist/antd.css';
class IssueTrackerPage extends Component {
  state = {
    priority: 'critical',
  };
  handleSubmit = (values) => {

    let issue = values.issue;
    let priority =this.state.priority;
    
    const data = {
      issue, priority
    };
    
    this.props.dispatch(createIssueAction(data));
  }

  componentDidMount() {
    document.title = 'Issue Tracker';
  }
  onChange = e => {
    
    this.setState({
      priority: e.target.value,
    });
  };
  render() {

    
    let issues=this.props.response.issueTracker.issues;
    
    return (

      <Row style={{ padding: '2%' }}>
        <Col span={12} offset={10}><h3>Issue Tracker</h3></Col>

        

        
        <Col span={12} offset={6} >

          <Form onFinish={this.handleSubmit}
            layout={'vertical'}
            name="basic"
            initialValues={{
              remember: true,
            }}

          >

            <Form.Item
              label="What do you want to record:"
              name="issue"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <Input.TextArea style={{ display: 'block' }} rows={4} />
            </Form.Item>
            <Form.Item block

              name="priority"
              rules={[
                {
                  required: true,
                  message: 'This field is required!',
                },
              ]}
            >
              <Radio.Group onChange={this.onChange} style={{ display: 'block' }} value={this.state.priority}>
                <Radio.Button value={'critical'} style={{ backgroundColor: 'red', borderColor: 'red', marginRight: '1%', color: '#fff' }}>Critical</Radio.Button>
                <Radio.Button value={'normal'} style={{ backgroundColor: 'green', borderColor: 'green', marginRight: '1%', color: '#fff' }}>Normal</Radio.Button>
                <Radio.Button value={'info'} style={{ backgroundColor: '#000', borderColor: '#000', marginRight: '1%', color: '#fff' }}>Info</Radio.Button>

              </Radio.Group>
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit" block style={{ backgroundColor: 'green', borderColor: 'green' }}>
                Submit
        </Button>
            </Form.Item>
          </Form>
        </Col>
        {
          !_.isEmpty(issues) &&   issues.map( (issue, key) => {
            switch(issue.priority) {
              case 'critical':
                return <Alert style={{ marginLeft: '25%', width: '50%', backgroundColor: 'red',marginBottom: '1%', borderColor: 'red', marginRight: '1%' }} block
                message="a minute ago"
                description={issue.issue}
                type="success"  key={key}
              />
              case 'normal':
                return <Alert style={{ marginLeft: '25%', width: '50%', backgroundColor: 'green',marginBottom: '1%', borderColor: 'green', marginRight: '1%' }} block
                message="a minute ago"
                description={issue.issue}
                type="success"  key={key}
              />
              case 'info':
                return <Alert style={{ marginLeft: '25%', width: '50%', backgroundColor: '#000',marginBottom: '1%', borderColor: '#000', marginRight: '1%' }} block
                message="a minute ago"
                description={issue.issue}
                type="success"  key={key}
              />
            }
              
            
            })
          }
        {/* <Alert style={{ marginLeft: '25%', width: '50%', backgroundColor: 'red', borderColor: 'red', marginRight: '1%' }} block
          message="Success Text"
          description="Success Description Success Description Success Description"
          type="success" closable
        /> */}
      </Row>

    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(IssueTrackerPage);