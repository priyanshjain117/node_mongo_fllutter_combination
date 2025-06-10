import 'package:flutter/material.dart';

class ListUserScreen extends StatelessWidget {
  const ListUserScreen({super.key, required this.users});
  final users;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(),
      body: Container(
        width: double.infinity,
        height: double.infinity,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [
              Colors.deepOrangeAccent,
              Colors.redAccent,
            ],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(18.0),
            child: Table(
              columnWidths: const {
                0: FixedColumnWidth(80),
                1: FixedColumnWidth(180),
                2: FixedColumnWidth(100),
              },
              border: TableBorder.all(color: Colors.black87),
              children: [
                TableRow(
                  children: [
                    Text(
                      'Name',
                      style: TextStyle(fontWeight: FontWeight.bold),
                      textAlign: TextAlign.center,
                    ),
                    Text(
                      'Email',
                      style: TextStyle(fontWeight: FontWeight.bold),
                      textAlign: TextAlign.center,
                    ),
                    Text(
                      'Date',
                      style: TextStyle(fontWeight: FontWeight.bold),
                      textAlign: TextAlign.center,
                    ),
                  ],
                ),
                for (var user in users)
                  TableRow(
                    children: [
                      Text(
                        user['name'],
                        textAlign: TextAlign.center,
                      ),
                      Text(
                        user['email'],
                        textAlign: TextAlign.center,
                      ),
                      Text(
                        user['createdAt'].trim().split('T')[0],
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
