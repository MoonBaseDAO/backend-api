1. **Authentication:**
   - POST /auth/register: Register a new user.
   - POST /auth/login: Authenticate and log in a user.

2. **Users:**
   - GET /users: Retrieve a list of all users (admin only).
   - GET /users/{user_id}: Retrieve a specific user's details.
   - PUT /users/{user_id}: Update a specific user's details.
   - DELETE /users/{user_id}: Delete a specific user (admin only).

3. **Teams:**
   - POST /teams: Create a new team.
   - GET /teams/{team_id}: Retrieve a specific team's details.
   - PUT /teams/{team_id}: Update a specific team's details.
   - DELETE /teams/{team_id}: Delete a specific team.
   ├── **Members:**
       - GET /teams/{team_id}/members: Retrieve a list of all members in a specific team.
       - POST /teams/{team_id}/members: Add a new member to a specific team.
       - DELETE /teams/{team_id}/members/{user_id}: Remove a member from a specific team.
   ├── **Projects:**
       - POST /teams/{team_id}/projects: Create a new project and associate it with a specific team.
       - GET /teams/{team_id}/projects: Retrieve a list of all projects associated with a specific team.

4. **Projects:**
   - GET /projects/{project_id}: Retrieve a specific project's details.
   - PUT /projects/{project_id}: Update a specific project's details.
   - DELETE /projects/{project_id}: Delete a specific project.
   ├── **Tasks:**
       - POST /projects/{project_id}/tasks: Create a new task and associate it with a specific project.
       - GET /projects/{project_id}/tasks: Retrieve a list of all tasks associated with a specific project.
       - GET /projects/{project_id}/tasks?status={status}&priority={priority}: Filter tasks based on status and priority.

5. **Tasks:**
   - GET /tasks: Retrieve a list of all tasks.
   - POST /tasks: Create a new task.
   - GET /tasks/{task_id}: Retrieve a specific task's details.
   - PUT /tasks/{task_id}: Update a specific task's details.
   - DELETE /tasks/{task_id}: Delete a specific task.
   - PUT /tasks/{task_id}/assignee: Assign a user to a specific task.
   ├── **Comments:**
       - GET /tasks/{task_id}/comments: Retrieve all comments associated with a specific task.
       - POST /tasks/{task_id}/comments: Add a new comment to a specific task.
   ├── **Attachments:**
       - GET /tasks/{task_id}/attachments: Retrieve all attachments associated with a specific task.
       - POST /tasks/{task_id}/attachments: Upload a new attachment to a specific task.
   ├── **Activity Log:**
       - GET /tasks/{task_id}/activity: Retrieve the activity log for a specific task.

6. **Notifications:**
   - GET /users/{user_id}/notifications: Retrieve a list of notifications for a specific user.
