<?php

/**
 * @param string $name;
 * @param string $contetns;
 * @param string $color;
 */
$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];
$contents = $data['contents'];
$color = $data['color'];

if ($color != 'green' && $color != 'lightBlue' && $color != 'pink' && $color != 'purple' && $color != 'yellow') {
  $result['success'] = false;
} elseif (mb_strlen($contents, 'UTF-8') >= 23 || mb_strlen($name, 'UTF-8') >= 11) {
  $result['success'] = false;
  $result['errorPoint'] = 2;
} else {

  $dbh = new PDO(
    'mysql:host=db;dbname=tanabatadb',
    'user',
    'password'
  );
  $stmt = $dbh->prepare(
    "INSERT into tanzaku_info (name, contents, color) values (?, ?, ?);"
  );
  $stmt->execute([$name, $contents, $color]);
  $result['success'] = true;
}

echo (json_encode($result, JSON_PRETTY_PRINT));
