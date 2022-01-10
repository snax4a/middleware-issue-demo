export const isServer = typeof window === 'undefined'

export const fetcher = async (url: string, payload?: string) => {
  const res = await fetch(url)
  const data = await res.json()

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const status = res.status
    const error = new ApiError(status, data)
    throw error
  }

  return data
}

export class ApiError extends Error {
  public readonly statusCode: number
  public readonly info: any

  constructor(statusCode: number, info: any) {
    super('An error occurred while fetching the data.')
    this.statusCode = statusCode
    this.info = info
  }
}
