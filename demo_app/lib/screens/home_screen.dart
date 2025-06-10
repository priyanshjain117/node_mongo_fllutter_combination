import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  Future<void> _connectingToBackend() async {
    const url = 'http://localhost:3000/';
    final response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      final Map<String, dynamic> jsonData = json.decode(response.body);
      print(jsonData["msg"]);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: TextButton(
          onPressed: () {
            print("hello from button!");
            _connectingToBackend();
          },
          style: TextButton.styleFrom(backgroundColor: Colors.lightGreenAccent),
          child: const Text("click to check backend!"),
        ),
      ),
    );
  }
}
