import { render } from "@testing-library/react";
import Medications from "pages/Medications";

describe("medications Component", () => {
	it("renders correctly", () => {
		const { getByText } = render(<Medications />);
		expect(getByText("medications")).toBeInTheDocument();
	});
});