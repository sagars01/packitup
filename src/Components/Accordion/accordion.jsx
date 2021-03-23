import { Button as AntButton, Collapse } from 'antd'
import styled from 'styled-components'
import { SettingOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import TaskCards from '../Cards/taskCards'
const { Panel } = Collapse

const collapseChangeCB = (data) => {
  console.log(data)
}

const Button = styled(AntButton)`
  margin-right: 15px;
`

const PanelSettings = () => {
  return <SettingOutlined></SettingOutlined>
}

const accordionOptions = (accordionKey, panelListItem, buttonClickCB) => {
  const buttonInformation = {
    accordionKey,
    panelListItem
  }
  return (
    <div>
      <Button onClick={() => buttonClickCB(buttonInformation)}>
        Add Tasks
      </Button>
      <PanelSettings />
    </div>
  )
}

const panelListTest = [
  {
    panelName: 'Marketing',
    component: <div>Inside Content</div>
  }
]

const TestCB = (data) => {
  console.log(data)
}

/**
 *
 * @param {*} panelList -  panelName , component
 * @returns accordion component
 */
export default function Accordion01({ panelListData }) {
  const [panelList, setPanel] = useState(panelListData || [])
  const [expandIconPos, setExpandIconPost] = useState('left')
  useEffect(() => {
    setPanel(panelListTest)
  }, [])

  return (
    <div className='wrapper'>
      <Collapse
        defaultActiveKey={['1']}
        onChange={collapseChangeCB}
        expandIconPosition={expandIconPos}
      >
        {panelList.map(({ panelName, component }, index) => (
          <Panel
            header={panelName}
            key={index}
            extra={accordionOptions(index, panelName, TestCB)}
          >
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}
