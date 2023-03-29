import LoremIpsum from "./LoremIpsum";

export default function Homepage() {
    return (
        <div className="container-fluid p-0">
            <div className="p-5 one imagediv">
                <LoremIpsum />
            </div>
            <div className="d-md-flex">

                <div className="p-5 two">
                    <LoremIpsum />
                </div>

                <div className="p-5 three">
                    <LoremIpsum />
                </div>

                <div className="p-5 four">
                    <LoremIpsum />
                </div>

            </div>
        </div>
    )
}