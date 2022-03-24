import React, { Fragment, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const NewExample = () => {

    const [count, setCount] = useState(0)

    const apiResponse = fetch();

    const handleClick = () => {
        console.log('CLICKING');
        setCount((prev) => prev + 1)
    }

    useEffect(() => {
        console.log("1")

    }, [apiResponse])

    useEffect(() => {
        return () => {
            clearTimeout();
        }
    }, [])


    return <Fragment>
        {/* Count is {count} */}
        <div>
            <Button onClick={handleClick}>Click Me</Button>
        </div>
    </Fragment>
}

export default NewExample;