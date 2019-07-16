package main

import "fmt"

func main() {
	i := 1
	for i <= 3 {
		fmt.Println(i)
		i = i + 1
	}

	for j := 7; j <= 9; j++ {
		fmt.Println(j)
	}

	for {
		fmt.Println("loop")
		break
	}

	for n := 0; n <= 5; n++ {
		fmt.Println("n = ", n)
		fmt.Println("n%2", n%2)
		if n%2 == 0 {
			continue
		}
		fmt.Println(n)
	}
}
