import React from 'react'

import LandingPage from './LandingPage'

export default {
  title: 'Pages/LandingPage',
  component: LandingPage,
  argTypes: {
    propertyA: {
      control: {
        type: 'select',
        options: ['Item One', 'Item Two', 'Item Three']
      }
    },
    propertyB: {
      control: {
        type: 'select',
        options: ['Another Item One', 'Another Item Two', 'Another Item Three']
      }
    },
    backgroundColor: { control: 'color' }
  }
}

const Template = ({ propertyA, propertyB }) => (
  <LandingPage prop1={propertyA} prop2={propertyB} />
)
/**
 * This is article of the story (LandingPage)
 */
export const WhiteMode = Template.bind({})
