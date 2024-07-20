import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Layout from '../../components/Layout/Layout'

// with this story you can quickly test building a page with various components passed in as children
export default {
  title: 'Page/Layout',
  component: Layout
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const BuildAPage = Template.bind({})
BuildAPage.args = {
  children: (
    <div className="mx-8">
      <div>Some Content</div>
      <div>Some more Content</div>
      <div>Even More Content</div>
    </div>
  )
}

export const NoNavPage = Template.bind({})
NoNavPage.args = {
  noNav: true,
  children: (
    <div className="mx-8">
      <div>Some Content</div>
      <div>Some more Content</div>
      <div>Even More Content</div>
    </div>
  )
}

export const NoFooterPage = Template.bind({})
NoFooterPage.args = {
  noFooter: true,
  children: (
    <div className="mx-8">
      <div>Some Content</div>
      <div>Some more Content</div>
      <div>Even More Content</div>
    </div>
  )
}
