type MyComponentProps<T> = {
  items: T[]
  defaultItem: T
}

//можно написать и стрелочныйм синтаксисом таким образом (ставим запятую <T,> чтобы ts не думал, что пишется jsx)

// const MyComponent = <T,>(props: MyComponentProps<T>) =>{
//   console.log(props)
//   return <p>some content</p>
// }


function MyComponent<T>(props: MyComponentProps<T>) {
  console.log(props)
  return <p>some content</p>
}

const App = () => {
  const users: User[] = [
    { name: 'Bilbo', age: 111 },
    { name: 'Frodo', age: 33 },
  ]

  return (
    <>
      <MyComponent items={['react', 'typescript']} defaultItem={'9'} />
      <MyComponent items={users} defaultItem={{ name: 'Bilbo', age: 111 }} />
    </>
  )
}

type User = {
  name: string
  age: number
}
