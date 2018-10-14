import React, {Component} from 'react'
import {Form, Button, Message, Input } from 'semantic-ui-react'
import Campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/web3'
import { Link, Router } from '../../../routes'
import Layout from '../../../components/Layout';

class RequestNew extends Component{
    state = {
        value:'',
        description: '',
        recipient: ''
    }
    static async getInitialProps(props){
        const {address }= props.query

        return { address }
    }
    render(){
        return(
            <Layout>
                <Form>
                    <Form.Field>
                        <label>Desciption</label>
                        <Input 
                        value={this.state.description}
                        onChange={ event => this.setState({ description:event.target.value}) }
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>Value in Ether</label>
                        <Input />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input />
                    </Form.Field>
                </Form>
            </Layout>
        )
    }
}

export default RequestNew