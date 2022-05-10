interface ButtonProps {
  text?: string
}

function Button(props: ButtonProps) {
  return <button className="bg-">{props.text ?? 'Default'}</button>
}

function App() {

  return <>
  <Button text="Aperte"/>

  </>

}

export default App
