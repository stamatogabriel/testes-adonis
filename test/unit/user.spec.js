const { test, trait, afterEach } = use('Test/Suite')('User registration')
const User = use('App/Models/User')

trait('Test/ApiClient')

afterEach(async () => {
  await User.query().delete()
})

test('criar um usuário', async({ client }) => {
  const response = await client.post('/register').send({
    username:'gabriel',
    email:'stamato7@gmail.com',
    password:'123456'
  }).end()

  response.assertStatus(200)
          .assertJSONSubset({
              username:'gabriel',
              email:'stamato7@gmail.com'
            })
})

test('não criar um usuário', async({ client }) => {
  const response = await client.post('/register').end()

  response.assertStatus(500)
})
