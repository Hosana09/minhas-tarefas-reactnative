import React, {useState} from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Card, Checkbox, IconButton, Provider as PaperProvider, Text, TextInput} from 'react-native-paper';

interface Task {
    id: string;
    title: string;
    description: string;
    duration: string;
    completed: boolean;
}

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDuration, setTaskDuration] = useState('');

    const addTask = () => {
        if (taskTitle.trim() === '') return;

        const newTask: Task = {
            id: Date.now().toString(),
            title: taskTitle,
            description: taskDescription,
            duration: taskDuration,
            completed: false,
        };

        setTasks([newTask, ...tasks]);
        setTaskTitle('');
        setTaskDescription('');
        setTaskDuration('');
    };

    const toggleTask = (id: string) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const completedCount = tasks.filter(t => t.completed).length;

    return (
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.keyboardView}
                    >
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>✨ Minhas Tarefas ✨</Text>
                            <Text style={styles.headerSubtitle}>
                                Organize seu dia com carinho
                            </Text>
                            {tasks.length > 0 && (
                                <Text style={styles.statsText}>
                                    {completedCount} de {tasks.length} tarefas concluídas 💕
                                </Text>
                            )}
                        </View>

                        <Card style={styles.formCard}>
                            <Card.Content>
                                <Text style={styles.formTitle}>Adicionar Nova Tarefa</Text>

                                <TextInput
                                    label="Título da tarefa"
                                    value={taskTitle}
                                    onChangeText={setTaskTitle}
                                    mode="outlined"
                                    style={styles.input}
                                    outlineColor="#FFB6C1"
                                    activeOutlineColor="#FF69B4"
                                    placeholder="Ex: Fazer exercícios"
                                />

                                <TextInput
                                    label="Descrição (opcional)"
                                    value={taskDescription}
                                    onChangeText={setTaskDescription}
                                    mode="outlined"
                                    multiline
                                    numberOfLines={2}
                                    style={styles.input}
                                    outlineColor="#FFB6C1"
                                    activeOutlineColor="#FF69B4"
                                    placeholder="Ex: Yoga"
                                />

                                <TextInput
                                    label="Duração em minutos (opcional)"
                                    value={taskDuration}
                                    onChangeText={setTaskDuration}
                                    mode="outlined"
                                    keyboardType="numeric"
                                    style={styles.input}
                                    outlineColor="#FFB6C1"
                                    activeOutlineColor="#FF69B4"
                                    placeholder="Ex: 30"
                                    left={<TextInput.Icon icon="clock-outline" color="#FF69B4"/>}
                                />

                                <Button
                                    mode="contained"
                                    onPress={addTask}
                                    style={styles.addButton}
                                    buttonColor="#FF69B4"
                                    icon="plus"
                                >
                                    Adicionar Tarefa
                                </Button>
                            </Card.Content>
                        </Card>

                        <ScrollView style={styles.taskList}>
                            {tasks.length === 0 ? (
                                <View style={styles.emptyState}>
                                    <Text style={styles.emptyText}>
                                        Ainda não há tarefas! 💫
                                    </Text>
                                    <Text style={styles.emptySubtext}>
                                        Adicione sua primeira tarefa acima
                                    </Text>
                                </View>
                            ) : (
                                tasks.map((task) => (
                                    <Card
                                        key={task.id}
                                        style={[
                                            styles.taskCard,
                                            task.completed && styles.taskCardCompleted
                                        ]}
                                    >
                                        <Card.Content style={styles.taskContent}>
                                            <View style={styles.taskLeft}>
                                                <View style={styles.checkboxContainer}>
                                                    <Checkbox
                                                        status={task.completed ? 'checked' : 'unchecked'}
                                                        onPress={() => toggleTask(task.id)}
                                                        color="#FF69B4"
                                                        uncheckedColor="#FFB6C1"
                                                    />
                                                </View>
                                                <View style={styles.taskTextContainer}>
                                                    <Text
                                                        style={[
                                                            styles.taskTitle,
                                                            task.completed && styles.taskTitleCompleted
                                                        ]}
                                                    >
                                                        {task.title}
                                                    </Text>
                                                    {task.description ? (
                                                        <Text
                                                            style={[
                                                                styles.taskDescription,
                                                                task.completed && styles.taskDescriptionCompleted
                                                            ]}
                                                        >
                                                            {task.description}
                                                        </Text>
                                                    ) : null}
                                                    {task.duration ? (
                                                        <Text style={styles.taskDuration}>
                                                            ⏱️ {task.duration} min
                                                        </Text>
                                                    ) : null}
                                                </View>
                                            </View>
                                            <IconButton
                                                icon="delete"
                                                iconColor="#FF1493"
                                                size={20}
                                                onPress={() => deleteTask(task.id)}
                                            />
                                        </Card.Content>
                                    </Card>
                                ))
                            )}
                        </ScrollView>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF0F5',
    },
    keyboardView: {
        flex: 1,
    },
    header: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#FFB6C1',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#FF69B4',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 5,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        opacity: 0.9,
    },
    statsText: {
        fontSize: 14,
        color: '#FFF',
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '600',
    },
    formCard: {
        margin: 15,
        backgroundColor: '#FFF',
        borderRadius: 15,
        elevation: 3,
    },
    formTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF69B4',
        marginBottom: 15,
    },
    input: {
        marginBottom: 15,
        backgroundColor: '#FFF',
    },
    addButton: {
        marginTop: 5,
        borderRadius: 10,
    },
    taskList: {
        flex: 1,
        padding: 15,
        paddingTop: 5,
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    emptyText: {
        fontSize: 20,
        color: '#FFB6C1',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    emptySubtext: {
        fontSize: 14,
        color: '#DDA0DD',
    },
    taskCard: {
        marginBottom: 12,
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#FF69B4',
    },
    taskCardCompleted: {
        backgroundColor: '#FFE4E1',
        borderLeftColor: '#DDA0DD',
    },
    taskContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    taskLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    checkboxContainer: {
        backgroundColor: '#FFF0F5',
        borderRadius: 20,
        padding: 2,
        marginRight: 5,
    },
    taskTextContainer: {
        flex: 1,
        marginLeft: 5,
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    taskTitleCompleted: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
    taskDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    taskDescriptionCompleted: {
        textDecorationLine: 'line-through',
        color: '#AAA',
    },
    taskDuration: {
        fontSize: 12,
        color: '#FF69B4',
        marginTop: 4,
        paddingBottom: 2,
        fontWeight: '600',
    },
});
