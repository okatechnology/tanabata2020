<?php
require "initEnv.php";
init_env();
echo (getenv('ENV_TEST'));

function counter()
{
  $num = 0;
  return function () use (&$num) {
    return $num++;
  };
};

try {
  $dbh = new PDO(
    "mysql:host={$i(getenv('MYSQL_HOST_NAME'))};dbname={$i(getenv('MYSQL_DB_NAME'))}",
    getenv("MYSQL_USER"),
    getenv("MYSQL_PASSWORD")
  );

  $stmt = $dbh->prepare('SELECT * from (SELECT * from tanzaku_info order by id desc limit 100) as A order by id;');
  $stmt->execute();

  $counter = counter();

  while ($tableRow = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $index = $counter();
    $result[$index]['id'] = $tableRow['id'];
    $result[$index]['contents'] = $tableRow['contents'];
    $result[$index]['name'] = $tableRow['name'];
    $result[$index]['color'] = $tableRow['color'];
  }
} catch (PDOException $e) {
  echo ($e);
}


echo (json_encode($result, JSON_PRETTY_PRINT));
