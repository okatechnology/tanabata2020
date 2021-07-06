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
    "mysql:host={$i(getenv('MYSQL_HOST_NAME'))};dbname={$i(getenv('MYSQL_DB_NAME'))}",
    getenv("MYSQL_USER"),
    getenv("MYSQL_PASSWORD")
  );
  $stmt = $dbh->prepare(
    "INSERT into tanzaku_info (name, contents, color) values (?, ?, ?);"
  );
  $stmt->execute([$name, $contents, $color]);
  $result['success'] = true;
}

echo (json_encode($result, JSON_PRETTY_PRINT));
