const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('./data/worldcities.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log( results)}
    );



    .pipe(parse({
        columns: true,
        delimiter: ',',
        trim: true,
        skip_empty_lines: true
    })
        .on('readable', function(){
            let record;
            while (record = this.read()) {
                console.log(record);
                let City = new City(record);
                output.push(record)
            }
        })
        // When we are done, test that the parsed output matched what expected
        .on('end', function(){

            // console.log(output);

        }));

