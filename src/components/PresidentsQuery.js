// Query for Wikidata

const presidentsQuery = `SELECT ?president ?presidentLabel ?presidentPicture ?start_date (YEAR(?start_date)*10000 + MONTH(?start_date)*100 + DAY(?start_date) as ?start_integer)
WHERE {
  ?president p:P39 ?statement.
  ?statement ps:P39 wd:Q5176750; pq:P580 ?start_date.
  
  OPTIONAL {
    ?president wdt:P18 ?presidentPicture.
  }
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
ORDER BY ?start_integer ASC(?start_integer)`;

export default presidentsQuery;
