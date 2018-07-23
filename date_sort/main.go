package main

import (
	"log"
	"os"
	"text/template"
	"time"
)

func dateRange(dates []string) [2]string {
	var dRange [2]string
	dRange[0] = ""
	dRange[1] = ""
	// for index, s := range dates {
	// 	temp, _ := time.Parse("2006-01-02T15:04", s)
	// 	fmt.Println(temp.String())
	// 	range[index] = temp.Format("Mon Jan 2 15:04:05 -0700 MST 2006")
	// 	// fmt.Println(newDates[index])
	// }
	return dRange
}

func main() {
	now := time.Now()
	times := make([]string, 100)
	for i := 0; i < 100; i++ {
		temp := now.Add(time.Minute * 30 * time.Duration(i))
		times[i] = temp.Format("2006-01-02 15:04")
	}
	tpl := template.Must(template.New("date_sort.html").Funcs(template.FuncMap{"dateRange": dateRange}).ParseFiles("date_sort.html"))

	err := tpl.Execute(os.Stdout, times)

	if err != nil {
		log.Fatalln(err)
	}
}
