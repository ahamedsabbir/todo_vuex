<template>
    <div class="container mt-5">
        <button @click="formate" class="btn btn-success">Formate</button>
        <form class="form mt-4">
            <input type="text" class="form-control mb-2" v-model="form.name" />
            <input type="text" class="form-control mb-2" v-model="form.phone" />
            <select class="mb-2" v-model="form.status">
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>
            <button type="button" class="btn" @click="insertData">Insert</button>
            <button type="button" class="btn" @click="handelUpdate">Update</button>
        </form>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>
                        <input type="text" class="form-control" style="width:100%;"/>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts">
                    <td>{{ contact.id }}</td>
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.phone }}</td>
                    <td>{{ contact.status }}</td>
                    <td class="text-center">
                        <button @click="handelEdit(contact)" class="btn">Edit</button>
                        <button @click="handelDelete(contact.id)" class="btn">Delete</button>
                        <button @click="handelStatus(contact.id)" class="btn">Change</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr class="text-center">
                    <td colspan="100">{{ $store.state.contacts.length }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            form: {}
        }
    },
    methods: {
        insertData() {
            this.form.id = Math.floor(Math.random()*65536);
            console.log(this.form);
            this.$store.dispatch('actInsert', this.form);
            this.form = {}
        },
        formate(){
            this.$store.dispatch('actSet', []);
            alert('All Are Empty.')
        },
        handelDelete(id){
            this.$store.dispatch('actDelete', id);
        },
        handelStatus(id){
            this.$store.dispatch('actStatus', id);
        },
        handelEdit(data){
            this.form = data
            console.log(this.form)
        },
        handelUpdate(){
            this.$store.dispatch('actUpdate', this.form);
        }
    },
    computed: {
        ...mapState(['contacts'])
    }
}
</script>

<style></style>