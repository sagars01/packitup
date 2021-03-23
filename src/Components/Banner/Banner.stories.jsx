import React from 'react'

import { Banner } from './Banner'

export default {
  title: 'Components/Banner',
  component: Banner,
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

const Template = ({ propertyA, propertyB }) => <Banner viewport={propertyB} />
const DarkModeTemplate = ({ propertyA, propertyB }) => (
  <Banner viewport={propertyA} />
)
/**
 * This is article of the story (LandingPage)
 */
export const WhiteMode = Template.bind({})
export const DarkMode = DarkModeTemplate.bind({})
