export const authenticate = async () => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export const get_userId = async () => {
  const response = await fetch('/api/auth/', {
  });
  return await response.json();
}

export const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  return await response.json();
}

export const logout = async () => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  return await response.json();
};


export const signUp = async (username, email, password) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  return await response.json();
}

export const postWorkout = async (userId, title, date) => {
  const response = await fetch("/api/workouts/createworkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      title,
      date,
    }),
  });
  return await response.json();
}

export const postExercise = async (userId, workoutId, title, reps, sets, weight, notes) => {
  const response = await fetch("/api/workouts/createexercise", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      workoutId,
      title,
      reps,
      sets,
      weight,
      notes,
    }),
  });
  return await response.json();
}

export const postEntry = async (userId, title, notes, date) => {
  const response = await fetch("/api/diaryentries/createentry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      title,
      notes,
      date,
    }),
  });
  return await response.json();
}

export const postMealEntry = async (userId, title, date) => {
  const response = await fetch("/api/foodtracker/createfoodentry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      title,
      date,
    }),
  });
  return await response.json();
}

export const postMeal = async (userId, mealEntryId, title, calories, fat, carbs, water) => {
  const response = await fetch("/api/foodtracker/createmeal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      mealEntryId,
      title,
      calories,
      fat,
      carbs,
      water,
    }),
  });
  return await response.json();
}
