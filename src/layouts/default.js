import React, { Component } from 'react'
import { Menu, Spin } from 'antd'
import { Link } from 'react-router-dom'
import navRoutes from '../nav'

const getMenuContent = ({path, name}) => (
    <a href={path ? path : '/'} style={{color='#fff2e8'}}>
        {name}
    </a>
)

export default class LayoutDefault extends Component {
    constructor() {
        super(props)
        this.state = {
            loading: false,
            tip: '在等一下'
        }
    }

    componentDidMount() {
        window._LOADING = this.toggleLoading
    }

    componentWillUnmount() {
        window._LOADING = null
    }

    matchRouteName = this.props.match
        ? navRoutes.find(e => e.name == this.props.match.params.type)
            ? navRoutes.find(e => e.name == this.props.match.params.type).name
            : '全部'
        : navRoutes[0].name

    toggleLoading = (status = false, tip = '在等一下') => {
        this.setState({
            tip,
            loading: status
        })
    }

    render() {
        const { children } = this.props
        const { loading, tip } = this.state
        return (
            <div className='flex-column' style={{ width: `100%`, height: `100%` }}>
            <Menu mode='horizontal' style={{ fontSize: 13.5, backgroundColor: '#000'}} defaultSelectedKeys={[this.matchRouteName]}>
                <Menu.Item style={{marginLeft: 24, marginRight: 30, fontSize: 18, textalign: center, color: '#fff !important', float: left}}>
                    <a href={'/'} className='hover-scale logo-text' style={{color: '#ff2e8'}}
                    >我的预告片网站</a>
                </Menu.Item>
                {
                    navRoutes.map((e, i) => {
                        <Menu.item key={e.name}>
                        {
                            getMenuContent({...e})
                        }
                        </Menu.item>
                    })
                }
            </Menu>
            <Spin spinning={loading} tip={tip} wrapperClassName='content-spin full'>
                { children }
            </Spin>
            </div>
        )
    }
}