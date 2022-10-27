export const APP_SERVER_URL = `${process.env.REACT_APP_SERVER_URL}`
export const API_KEY = `${process.env.REACT_APP_API_KEY}`

export const getHeaders = () => {
  return {
    'Content-Type': 'application/json;charset=UTF-8',
    accept: 'application/json',
    authorization: `Token ${API_KEY}`,
  }
}
