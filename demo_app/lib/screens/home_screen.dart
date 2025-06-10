// ignore_for_file: must_be_immutable, unused_element

import 'dart:convert';

import 'package:demo_app/screens/list_user_screen.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;


class HomeScreen extends StatelessWidget {
  HomeScreen({super.key});
  String name = '';
  String email = '';

  Future<void> _connectingToBackend() async {
    const url = 'http://localhost:3000/';
    final response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      final Map<String, dynamic> jsonData = json.decode(response.body);
      print(jsonData["msg"]);
    }
  }

  Future<void> _postRequestCheck() async {
    const url = 'http://localhost:3000/user';
    final response = await http.post(
      Uri.parse(url),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({'name': name, 'email': email}),
    );

    final Map<String, dynamic> jsonData = json.decode(response.body);
    print(jsonData['msg']);
    print(jsonData['user']['name']);
  }

  Future<dynamic> _loadData() async {
    const url = 'http://localhost:3000/user';
    final response= await http.get(
      Uri.parse(url),
    );
    print(response.statusCode);
    final jsonData=json.decode(response.body);
    return jsonData['users'];
    
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                TextField(
                    decoration: InputDecoration(
                      labelText: 'name',
                    ),
                    onChanged: (value) {
                      name = value;
                    }),
                SizedBox(
                  height: 10,
                ),
                TextField(
                  decoration: InputDecoration(
                    labelText: 'email',
                  ),
                  onChanged: (value) {
                    email = value;
                  },
                ),
                SizedBox(
                  height: 12,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    TextButton(
                      style:
                          TextButton.styleFrom(backgroundColor: Colors.orange),
                      onPressed: _postRequestCheck,
                      child: const Text("submit"),
                    ),
                    TextButton(
                      style:
                          TextButton.styleFrom(backgroundColor: Colors.orange),
                      onPressed: () async {
                        final users=await _loadData();
                        Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (ctx) => ListUserScreen(users: users,),
                          ),
                        );
                      },
                      child: const Text("List all users"),
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
