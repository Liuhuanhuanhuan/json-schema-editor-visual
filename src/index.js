import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'
import { standardSchema, notStandardSchema } from './schema'

import '../dist/main.css'
const jeditor = require('../dist/main')

const mock = [
  { name: '字符串', mock: '@string' },
  { name: '自然数', mock: '@natural' },
  { name: '浮点数', mock: '@float' },
  { name: '字符', mock: '@character' },
  { name: '布尔', mock: '@boolean' },
  { name: 'url', mock: '@url' },
  { name: '域名', mock: '@domain' },
  { name: 'ip地址', mock: '@ip' },
  { name: 'id', mock: '@id' },
  { name: 'guid', mock: '@guid' },
  { name: '当前时间', mock: '@now' },
  { name: '时间戳', mock: '@timestamp' },
]

const JEditor1 = jeditor({ mock: mock, lang: 'zh_CN' })
render(
  <div>
    <JEditor1
      showEditor={true}
      showImportButton={true}
      data={JSON.stringify(notStandardSchema)}
      showSaveButton={true}
      contentHeight="400px"
      handleChange={(e) => {
        console.log('changeValue', e)
      }}
    />
  </div>,
  document.getElementById('root')
)

/**
 * 功能拆分：
 * 1. 需要直接传入json-scheme
 * 2. 需要隐藏可视化区域
 * 3. 需要隐藏导入的功能
 * 4. 新增不可编辑功能
 *
 * */
