import { Client } from '@notionhq/client'

// Initialize Notion client
export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

// Database IDs from your Notion workspace
export const DATABASES = {
  ENTITIES: process.env.NOTION_DATABASE_ENTITIES || 'bc39dd0e-1d3e-428a-b53d-253e1e01271b',
  DEALS: process.env.NOTION_DATABASE_DEALS || '1ffbdaaf-1e3b-4ad7-b6ae-de730b1955c7',
  PROPERTIES: process.env.NOTION_DATABASE_PROPERTIES || '3431b22b-81ff-404a-8ae7-a0677daa957e',
}

// Type definitions for Notion data
export interface NotionDeal {
  id: string
  dealName: string
  stage: string
  propertyAddress: string
  sellerName: string
  sellerPhone: string
  assignmentFee: number | null
  closeDate: string | null
  strategy: string
  county: string
  source: string
}

export interface NotionEntity {
  id: string
  legalName: string
  shortName: string
  type: string
  status: string
  jurisdiction: string
  ein: string
  manager: string
}

export interface NotionProperty {
  id: string
  propertyName: string
  assetClass: string
  city: string
  state: string
  status: string
  valuation: number | null
  noi: number | null
}

// Fetch all deals
export async function getDeals(): Promise<NotionDeal[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASES.DEALS,
      sorts: [
        {
          property: 'Stage',
          direction: 'ascending',
        },
      ],
    })

    return response.results.map((page: any) => ({
      id: page.id,
      dealName: page.properties['Deal name']?.title?.[0]?.plain_text || 'Untitled',
      stage: page.properties['Stage']?.status?.name || 'Lead',
      propertyAddress: page.properties['Property address']?.rich_text?.[0]?.plain_text || '',
      sellerName: page.properties['Seller name']?.rich_text?.[0]?.plain_text || '',
      sellerPhone: page.properties['Seller phone']?.phone_number || '',
      assignmentFee: page.properties['Assignment fee']?.number || null,
      closeDate: page.properties['Close date']?.date?.start || null,
      strategy: page.properties['Strategy']?.select?.name || '',
      county: page.properties['County']?.rich_text?.[0]?.plain_text || '',
      source: page.properties['Source']?.rich_text?.[0]?.plain_text || '',
    }))
  } catch (error) {
    console.error('Error fetching deals:', error)
    return []
  }
}

// Fetch all entities
export async function getEntities(): Promise<NotionEntity[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASES.ENTITIES,
      sorts: [
        {
          property: 'Type',
          direction: 'ascending',
        },
      ],
    })

    return response.results.map((page: any) => ({
      id: page.id,
      legalName: page.properties['Legal name']?.title?.[0]?.plain_text || 'Untitled',
      shortName: page.properties['Short name']?.rich_text?.[0]?.plain_text || '',
      type: page.properties['Type']?.select?.name || '',
      status: page.properties['Status']?.status?.name || 'Draft',
      jurisdiction: page.properties['Jurisdiction']?.rich_text?.[0]?.plain_text || '',
      ein: page.properties['EIN']?.rich_text?.[0]?.plain_text || '',
      manager: page.properties['Manager']?.rich_text?.[0]?.plain_text || '',
    }))
  } catch (error) {
    console.error('Error fetching entities:', error)
    return []
  }
}

// Fetch all properties
export async function getProperties(): Promise<NotionProperty[]> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASES.PROPERTIES,
    })

    return response.results.map((page: any) => ({
      id: page.id,
      propertyName: page.properties['Property name/address']?.title?.[0]?.plain_text || 'Untitled',
      assetClass: page.properties['Asset class']?.select?.name || '',
      city: page.properties['City']?.rich_text?.[0]?.plain_text || '',
      state: page.properties['State']?.rich_text?.[0]?.plain_text || '',
      status: page.properties['Status']?.status?.name || 'Prospect',
      valuation: page.properties['Valuation']?.number || null,
      noi: page.properties['NOI']?.number || null,
    }))
  } catch (error) {
    console.error('Error fetching properties:', error)
    return []
  }
}

// Create a new deal from lead form submission
export async function createDeal(data: {
  name: string
  phone: string
  email: string
  address: string
  timeline: string
  source?: string
}) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: DATABASES.DEALS },
      properties: {
        'Deal name': {
          title: [
            {
              text: {
                content: data.address || `Lead from ${data.name}`,
              },
            },
          ],
        },
        'Seller name': {
          rich_text: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        'Seller phone': {
          phone_number: data.phone,
        },
        'Property address': {
          rich_text: [
            {
              text: {
                content: data.address,
              },
            },
          ],
        },
        'Source': {
          rich_text: [
            {
              text: {
                content: data.source || 'Website',
              },
            },
          ],
        },
        'Stage': {
          status: {
            name: 'Lead',
          },
        },
        'External source': {
          select: {
            name: 'Web',
          },
        },
      },
    })

    return response
  } catch (error) {
    console.error('Error creating deal:', error)
    throw error
  }
}
