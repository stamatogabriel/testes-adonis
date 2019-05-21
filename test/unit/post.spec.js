const { test, trait, afterEach } = use('Test/Suite')('Post')
const User = use('App/Models/User')
const Post = use('App/Models/Post')

trait('Test/ApiClient')

afterEach(async () => {
  await User.query().delete()
  await Post.query().delete()
})

test('listar todos os posts', async ({ client }) => {
  const response = await client.get('/post').end()

  response.assertStatus(200).assrtJSON([])
})
