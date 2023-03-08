import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App.js'
import utils from './utils'
import moox from 'moox'
import schema from './models/schema'
import PropTypes from 'prop-types'
import { isEmpty } from 'loadsh'
const merge = require('deepmerge')

module.exports = (config = {}) => {
  if (config.lang) utils.lang = config.lang

  const Model = moox({
    schema,
  })
  if (config.format) {
    Model.__jsonSchemaFormat = config.format
  } else {
    Model.__jsonSchemaFormat = utils.format
  }

  if (config.mock) {
    Model.__jsonSchemaMock = config.mock
  }

  const store = Model.getStore()

  const Component = (props) => {
    // const { data, disableData } = props
    // if (!isEmpty(data) && !isEmpty(disableData)) {
    //   const newData = merge(data, disableData)
    //   props = {
    //     ...props,
    //     data: JSON.stringify(newData),
    //   }
    // } else {
    //   props = {
    //     ...props,
    //     data: JSON.stringify(data),
    //   }
    // }

    const onChange = (data) => {
      const schema = data
        ? utils.deleteProperty(JSON.parse(data), 'disableEdit')
        : data
      props.handleChange && props.handleChange(schema)
    }

    const newProps = merge(props, { onChange: onChange })
    return (
      <Provider store={store} className="wrapper">
        <App Model={Model} {...newProps} />
      </Provider>
    )
  }

  Component.propTypes = {
    data: PropTypes.string,
    onChange: PropTypes.func,
    showEditor: PropTypes.bool,
  }
  return Component
}
