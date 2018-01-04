// code use in client
import hotClient from 'webpack-hot-middleware/client?noInfo=true&reload=true'

hotClient.subscribe((event) => {
  console.log(event)
})
