<?php

function counter()
{
  $num = 0;
  return function () use (&$num) {
    return $num++;
  };
};

try {
  $dbh = new PDO(
    'mysql:host=db;dbname=tanabatadb',
    'user',
    'password'
  );

  $stmt = $dbh->prepare(
    'SELECT count(*) from tanzaku_info'
  );
  $stmt->execute();
  $amount = $stmt->fetch(PDO::FETCH_ASSOC)['count(*)'];
  if ($amount > 100) {
    $startId = $amount - 99;
  } else {
    $startId = 1;
  }

  $stmt = $dbh->prepare('SELECT * from tanzaku_info where id >= ?');
  $stmt->execute([$startId]);

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
