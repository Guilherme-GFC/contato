import { ContactProvider } from "./context/contactContext";
import { RoutesMain } from "./routes";

function App() {
	return (
		<div className="App">
			<ContactProvider>
				<RoutesMain />
			</ContactProvider>
		</div>
	);
}

export default App;
