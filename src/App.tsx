import { BrowserRouter, Route, Routes } from "react-router-dom";
import BirthdayWish from "./greeting";
import BirthdayWishMobile from "./Mobile-birthday-wish";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<BirthdayWishMobile name=" Puja" songSrc="/birthday.mp3" />}
        />
        <Route path="/birthdayWish" element={<BirthdayWish />} />
      </Routes>
    </BrowserRouter>
  );
}
