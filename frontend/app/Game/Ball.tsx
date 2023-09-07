import React from 'react'
import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"

type Props = {}

const Ball = (props: Props) => {
	const [bx, setBx] = useState(500)
	const [by, setBy] = useState(900)
	const [bw, setBw] = useState(100)
	const [bh, setBh] = useState(100)
	const [scale, setScale] = useState(by / 800)
	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
		window.removeEventListener('keydown', handleKeyDown);
		};
	}, [by, bx]);
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === "ArrowUp")
		{
			if (by - 10 >= 10)
				setBy(by - 10)
			setScale(by / 800)
		}
		else if (event.key === "ArrowDown"){
			if (by + 10 < 1000)
				setBy(by + 10)
			setScale(by / 800)
		}
	}
  	return (
		<>
			<Box
				top={"10px"}
				position={"absolute"}
				w={"100px"}
				h={"10px"}
				bg={"#fff"}
			>
			</Box>
			<Box
				top={"1000px"}
				position={"absolute"}
				w={"100px"}
				h={"10px"}
				bg={"#fff"}
			>
			</Box>
			<Box
				bg={"#fff"}
				position={"absolute"}
				top={by}
				left={bx}
				w={bw * scale}
				h={bh * scale}
				borderRadius={"full"}
				>
			</Box>
			{/* <Box
				position={"absolute"}
				bg={"#000"}
				opacity={"0.15"}
				top={by + bw + (40 * scale)}
				left={bx}
				w={bw * scale}
				h={2}
				borderRadius={"full"}
			>
			</Box> */}
		</>
	)
}

export default Ball