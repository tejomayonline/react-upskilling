function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function MainGoal() {
  return (
    <>
      <h3>My Main Goal For React</h3>
      <p>
        I want to brush up my react concepts to strengthen my fullstack skills
        and grow my understanding.
      </p>
    </>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <MainGoal />
      </main>
    </div>
  );
}

export default App;
