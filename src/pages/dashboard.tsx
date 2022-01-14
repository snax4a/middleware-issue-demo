// to reproduce fast refresh issue try editing this file multiple times
// and hit save every time to run fast refresh
// you can even add and remove comments to trigger this error.

export default function DashboardPage() {
  const clickHandler = () => {
    const message = 'You have clicked the button'
    alert(message)
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={clickHandler}>Click me</button>
    </div>
  )
}
