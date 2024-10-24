import { render } from "@testing-library/react";
import Header from "../NavBar/Header";
import { UserContext } from "../hooks/UserContext";
import { Provider } from "react-redux";
import store from "../store/store"
import {StaticRouter} from "react-router-dom/server"


test("Logo should load on rendering header",()=>{
    // try to load header.

    const mockUserContext = {
      user: { uid: '123', email: 'test@example.com' },  // A mock user object
      username: 'TestUser',  // A mock username
      logout: jest.fn(),  // A mock logout function
    };

  const header =   render(
    <StaticRouter>
    <Provider store={store}>
    <UserContext.Provider value={mockUserContext}>
      <Header />
    </UserContext.Provider>
    </Provider>
    </StaticRouter>
  );
  // console.log(header);
  const logo = header.getAllByTestId("logo");
 
    //then check logo is loaded
    expect(logo[0].src).toBe("http://localhost/dummy.webp");

    //testing online status 
    const OnlineStatus = header.getAllByTestId("online-status");
    console.log(OnlineStatus);
    expect(OnlineStatus[0].innerHTML).toBe("Online");
});
test("Checking Online Status to be Online on initial Render",()=>{
    // try to load header.

    const mockUserContext = {
      user: { uid: '123', email: 'test@example.com' },  // A mock user object
      username: 'TestUser',  // A mock username
      logout: jest.fn(),  // A mock logout function
    };

  const header =   render(
    <StaticRouter>
    <Provider store={store}>
    <UserContext.Provider value={mockUserContext}>
      <Header />
    </UserContext.Provider>
    </Provider>
    </StaticRouter>
  );
  // console.log(header);


    //testing online status 
    const OnlineStatus = header.getByTestId("online-status");
    console.log(OnlineStatus);
    expect(OnlineStatus.innerHTML).toBe("Online");
});
test("On Initial Render Cart Should Have 0 items",()=>{
    // try to load header.

    const mockUserContext = {
      user: { uid: '123', email: 'test@example.com' },  // A mock user object
      username: 'TestUser',  // A mock username
      logout: jest.fn(),  // A mock logout function
    };

  const header =   render(
    <StaticRouter>
    <Provider store={store}>
    <UserContext.Provider value={mockUserContext}>
      <Header />
    </UserContext.Provider>
    </Provider>
    </StaticRouter>
  );
  // console.log(header);

  //? to see what is rendered inside container just mis-spell the id

    //testing online status 
   const cartItems = header.getByTestId("cart-id");
   expect(cartItems.innerHTML).toBe("0");
});