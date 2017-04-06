get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.includes(:votes).all
  erb :index
end

get '/posts/:id/vote' do
  p params
  post = Post.find(params[:id])
  post.votes.create(value: 1)
  content_type :json
  if params[:error] == 'true'
    status 404
    {valor: 'La embarro'}.to_json
  else
    {votes: post.points}.to_json
  end
end

delete '/posts/:id' do
  # Implementar la logica de esta ruta.
end

post '/posts' do
  post = Post.new( title: params["title"],
               username: Faker::Internet.user_name,
               comment_count: rand(1000) )
  if post.save
    erb :"_post", layout: false, locals: {post: post}
  else
    content_type :json
    {error: post.errors.full_messages}.to_json
  end
end


get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
