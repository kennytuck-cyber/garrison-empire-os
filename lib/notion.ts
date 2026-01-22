import { Client } from '@notionhq/client'

// Check if Notion is properly configured
export const isNotionConfigured = () => {
  return !!(process.env.NOTION_API_KEY)
}

// Initialize the Notion client (only if API key is available)
export const notion = process.env.NOTION_API_KEY
  ? new Client({ auth: process.env.NOTION_API_KEY })
  : null

// Database IDs from environment variables
export const DATABASES = {
  entities: process.env.NOTION_DATABASE_ENTITIES || '',
  deals: process.env.NOTION_DATABASE_DEALS || '',
  properties: process.env.NOTION_DATABASE_PROPERTIES || '',
}

// Helper to query a database
export async function queryDatabase(databaseId: string, filter?: any) {
  // Validate configuration
  if (!notion) {
    throw new Error('Notion client not initialized. Set NOTION_API_KEY environment variable.')
  }

  if (!databaseId) {
    throw new Error('Database ID not provided. Check your environment variables.')
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: filter,
    })
    return response.results
  } catch (error) {
    console.error('Error querying Notion database:', error)
    throw error
  }
}

// Helper to create a page (lead/deal)
export async function createPage(databaseId: string, properties: any) {
  if (!notion) {
    throw new Error('Notion client not initialized. Set NOTION_API_KEY environment variable.')
  }

  if (!databaseId) {
    throw new Error('Database ID not provided. Check your environment variables.')
  }

  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: properties,
    })
    return response
  } catch (error) {
    console.error('Error creating Notion page:', error)
    throw error
  }
}

// Helper to update a page
export async function updatePage(pageId: string, properties: any) {
  if (!notion) {
    throw new Error('Notion client not initialized. Set NOTION_API_KEY environment variable.')
  }

  if (!pageId) {
    throw new Error('Page ID not provided.')
  }

  try {
    const response = await notion.pages.update({
      page_id: pageId,
      properties: properties,
    })
    return response
  } catch (error) {
    console.error('Error updating Notion page:', error)
    throw error
  }
}

// Get all deals with optional status filter
export async function getDeals(status?: string) {
  const filter = status ? {
    property: 'Status',
    select: {
      equals: status
    }
  } : undefined

  return queryDatabase(DATABASES.deals, filter)
}

// Create a new lead/deal
export async function createLead(data: {
  name: string
  phone: string
  email: string
  address: string
  timeline?: string
  source?: string
}) {
  const properties: any = {
    'Name': {
      title: [{ text: { content: data.name } }]
    },
    'Phone': {
      phone_number: data.phone
    },
    'Email': {
      email: data.email
    },
    'Property Address': {
      rich_text: [{ text: { content: data.address } }]
    },
    'Status': {
      select: { name: 'New Lead' }
    }
  }

  if (data.timeline) {
    properties['Timeline'] = {
      select: { name: data.timeline }
    }
  }

  if (data.source) {
    properties['Source'] = {
      select: { name: data.source }
    }
  }

  return createPage(DATABASES.deals, properties)
}
